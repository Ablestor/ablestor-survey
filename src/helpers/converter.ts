import { BlockTypes } from '../@types/block';

export const getNameFromBlockType = (type: BlockTypes) => {
  switch (type) {
    case 'blank':
      return '없음';
    case 'short_text':
      return '단답형 질문';
    case 'long_text':
      return '장문형 질문';
    case 'switch':
      return '스위치형 질문';
    case 'check_box':
      return '체크박스형 질문';
    case 'single_select':
      return '단일 선택형 질문';
    case 'multi_select':
      return '다중 선택형 질문';
    case 'dropdown':
      return '드롭 다운형 질문';
    // case 'file_upload':
    //   return '첨부 파일 업로드';
    case 'range':
      return '범위 내 선택형 질문';
    // case 'date':
    //   return '날짜 선택형 질문';
    // case 'time':
    //   return '시간 선택형 질문';
    default:
      return '알 수 없음';
  }
};
