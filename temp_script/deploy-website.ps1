# 1️⃣ Define your project and domain
$ProjectId = 'personal-websites-460021'
$Domain    = 'maximmarchal.nl'


# 2️⃣ Create the bucket in europe-west1, STANDARD class
gcloud storage buckets create gs://$Domain `
  --project=$ProjectId `
  --location=europe-west1 `
  --storage-class=STANDARD                # defaults to STANDARD if you omit this


# 3️⃣ Grant public read access (allUsers → objectViewer)
gcloud storage buckets add-iam-policy-binding gs://$Domain `
  --member="allUsers" `
  --role="roles/storage.objectViewer"     # makes your files world-readable 


# 4️⃣ Configure as a static site (index + custom 404)
gcloud storage buckets update gs://$Domain `
  --website-main-page-suffix="index.html" `
  --website-not-found-page="404.html"     # tells GCS which pages to serve