// 이 데이터가 어떤 형태를 가지고 있는지를 명확히 정의
// 문서(가정통신문) 요약 결과의 타입 정의
export type DocumentSummary = {
  id?: string; // (옵션) DB 저장용 ID
  title: string; // 문서 제목
  body: string; // 요약 본문 내용
  originalText?: string; // 원문 (필요시)
  createdAt?: string; // 생성 시각
};
