<#
    Sync local screenshots to the Cloud Storage bucket,
    applying a one-year immutable cache header.
#>

$ErrorActionPreference = 'Stop'

$LocalDir  = "$PSScriptRoot\..\..\assets\images"
$Bucket    = "gs://personal-websites-portfolio-images/images"
$CacheHdr  = "public,max-age=31536000,immutable"

Write-Host "Uploading images from $LocalDir to $Bucket ..."

& gcloud storage rsync `
    $LocalDir $Bucket `
    --recursive `
    --cache-control="$CacheHdr" `
    --no-clobber

Write-Host "✅  Done - CDN will serve fresh copies within seconds."
