<#
.SYNOPSIS
  Crops a portrait into the square avatar used in the hero.

.DESCRIPTION
  Takes a square crop centred horizontally and weighted toward the top of the
  frame (so the face lands in the circle rather than the chest), then resizes
  to 800x800 and writes public/adil.jpg.

.EXAMPLE
  powershell -File scripts/crop-avatar.ps1 -Source "$env:USERPROFILE\Downloads\photo.jpg"
#>
param(
  # Not named -Input: that collides with PowerShell's automatic $input variable.
  [Parameter(Mandatory = $true)][string]$Source,
  [string]$Output,
  [int]$Size = 800,
  # 0 = crop flush to the top edge, 0.5 = vertically centred.
  [double]$VerticalBias = 0.06
)

Add-Type -AssemblyName System.Drawing

# Resolved here rather than as a param default: $PSScriptRoot is not yet
# populated during parameter binding under `powershell -File`, which silently
# writes the crop to the drive root instead of the project.
if (-not $Output) {
  $root = Split-Path -Parent $MyInvocation.MyCommand.Path
  $Output = Join-Path $root "..\public\adil.jpg"
}

if (-not (Test-Path $Source)) { throw "Source image not found: $Source" }

$src = [System.Drawing.Image]::FromFile((Resolve-Path $Source))
try {
  $side = [Math]::Min($src.Width, $src.Height)
  $x = [int](($src.Width - $side) / 2)
  $y = [int](($src.Height - $side) * $VerticalBias)

  $dest = New-Object System.Drawing.Bitmap($Size, $Size)
  $g = [System.Drawing.Graphics]::FromImage($dest)
  try {
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

    $srcRect = New-Object System.Drawing.Rectangle($x, $y, $side, $side)
    $dstRect = New-Object System.Drawing.Rectangle(0, 0, $Size, $Size)
    $g.DrawImage($src, $dstRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)
  }
  finally { $g.Dispose() }

  $outDir = Split-Path -Parent $Output
  if (-not (Test-Path $outDir)) { New-Item -ItemType Directory -Force $outDir | Out-Null }

  # Encode as JPEG at quality 92
  $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() |
    Where-Object { $_.MimeType -eq 'image/jpeg' }
  $params = New-Object System.Drawing.Imaging.EncoderParameters(1)
  $params.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter(
    [System.Drawing.Imaging.Encoder]::Quality, [long]92)

  $dest.Save($Output, $codec, $params)
  $dest.Dispose()

  Write-Host "Wrote $Output ($Size x $Size), cropped from $($src.Width)x$($src.Height)."
}
finally { $src.Dispose() }
