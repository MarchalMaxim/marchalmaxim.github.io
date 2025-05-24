<#
  Upload local screenshots to the Cloud Storage bucket and
  set a one-year immutable Cache-Control header on every object.
#>

$ErrorActionPreference = 'Stop'

$OutDir = Join-Path $PSScriptRoot '..\..\out';
$Bucket = "gs://maximmarchal.nl";
$CacheHdr = "public,max-age=3600,immutable";

Write-Host "`n Building static site..."
npm run build

Write-Host "`n Uploading static site to $Bucket ..."
& gcloud storage rsync `
    $OutDir $Bucket `
    --recursive `
    --delete-unmatched-destination-objects `
    --cache-control=$CacheHdr
