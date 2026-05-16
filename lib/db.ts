import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

// Vercel 환경변수에 등록된 DATABASE_URL을 가져옵니다.
const sql = neon(process.env.DATABASE_URL!);

// 향후 데이터베이스 조작에 사용할 db 객체를 생성합니다.
export const db = drizzle(sql);
