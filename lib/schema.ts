import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

// 예시: 향후 메모장 데이터를 저장할 테이블 스키마
// 이 스키마를 바탕으로 데이터베이스에 실제 테이블을 생성하게 됩니다.
export const memos = pgTable('memos', {
  id: serial('id').primaryKey(),
  author: text('author').notNull(),
  content: text('content').notNull(),
  color: text('color').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});
