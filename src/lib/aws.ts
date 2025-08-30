import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

export interface QAItem {
  question: string;
  answer: string;
}

export interface QACategory {
  category: string;
  questions: QAItem[];
}

if (
  !process.env.AWS_ACCESS_KEY_ID ||
  !process.env.AWS_SECRET_ACCESS_KEY ||
  !process.env.AWS_REGION ||
  !process.env.S3_BUCKET_NAME ||
  !process.env.S3_FILE_KEY ||
  !process.env.S3_DOCS_FILE_KEY
) {
  throw new Error('Missing required AWS environment variables');
}

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

export async function getQADataFromS3(): Promise<QACategory[]> {
  const command = new GetObjectCommand({
    Bucket: process.env.S3_BUCKET_NAME,
    Key: process.env.S3_FILE_KEY,
  });

  try {
    const { Body } = await s3Client.send(command);
    if (!Body) {
      throw new Error('The S3 object has no body.');
    }

    const bodyString = await Body.transformToString('utf-8');

    const data = JSON.parse(bodyString) as QACategory[];
    return data;
  } catch (error) {
    console.error('Failed to fetch or parse data from S3:', error);

    return [];
  }
}

export async function getDocsFromS3(): Promise<string> {
  const command = new GetObjectCommand({
    Bucket: process.env.S3_BUCKET_NAME,
    Key: process.env.S3_DOCS_FILE_KEY,
  });

  try {
    const { Body } = await s3Client.send(command);
    if (!Body) {
      throw new Error('The S3 object has no body.');
    }

    const bodyString = await Body.transformToString('utf-8');
    return bodyString;
  } catch (error) {
    console.error('Failed to fetch or parse data from S3:', error);
    return '';
  }
}

export async function getPresignedUrl(key: string): Promise<string> {
  const command = new GetObjectCommand({
    Bucket: process.env.S3_BUCKET_NAME,
    Key: key,
  });

  try {
    const url = await getSignedUrl(s3Client, command, { expiresIn: 3600 }); // URL expires in 1 hour
    return url;
  } catch (error) {
    console.error(`Failed to get presigned URL for key ${key}:`, error);
    return '';
  }
}
