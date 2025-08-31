# MA Job Application

The deployed website is available at [ma-job-application.vercel.app](https://ma-job-application.vercel.app).

## How to run locally

To run the project on your local machine, follow these steps:

1.  Clone the repository to your local machine.
2.  Install the necessary dependencies using pnpm:
    ```bash
    pnpm install
    ```
3.  Start the development server:
    ```bash
    pnpm dev
    ```
4.  Open your browser and navigate to `http://localhost:3000` to see the application running.

## Configuration

Before running the project, create a file named `.env.local` in the root directory and add the variables described below.

### AWS S3 for Q&A and Documentation

The application fetches Q&A data and documentation files from an AWS S3 bucket. To set this up:

1.  Create an AWS S3 bucket.
2.  Upload a JSON file for the Q&A data and a Markdown file for the documentation.
3.  Ensure your AWS IAM user has programmatic access with permissions to read from the bucket.
4.  Add the following variables to your `.env.local` file:

    ```bash
    # AWS Credentials
    AWS_ACCESS_KEY_ID="YOUR_ACCESS_KEY_ID_HERE"
    AWS_SECRET_ACCESS_KEY="YOUR_SECRET_ACCESS_KEY_HERE"
    AWS_REGION="YOUR_S3_BUCKET_REGION_HERE"

    # S3 Bucket Information
    S3_BUCKET_NAME="your-s3-bucket-name-here"
    S3_FILE_KEY="your-qa-file.json"
    S3_DOCS_FILE_KEY="your-docs-file.md"
    ```

### n8n for Chat

The chat feature is powered by an n8n workflow. To make it work:

1.  Set up an n8n instance and create a webhook workflow to process chat messages.
2.  Add your n8n credentials to the `.env.local` file:

    ```bash
    # N8N Credentials
    N8N_WEBHOOK_URL="webhook-url"
    N8N_USERNAME="webhook-basic-auth-username"
    N8N_PASSWORD="webhook-basic-auth-password"
    ```

### Application Security

These variables are used for password-protecting the site and securing user sessions.

1.  Add the following to your `.env.local` file:

    ```bash
    # Page content password protection
    SITE_PASSWORD=your_super_secret_password
    SESSION_SECRET=your_generated_secret_key
    ```

    **Note:** The `SESSION_SECRET` can be any randomly generated string.
