/**
 * * Object, Array 처럼 메모리 주소를 참조하는 데이터타입을 Copy하기 위한 함수
 */
export const deepCopy = (object: any): any => JSON.parse(JSON.stringify(object));
