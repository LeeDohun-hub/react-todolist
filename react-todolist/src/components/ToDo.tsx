import { useEffect } from "react";

interface Props {
    isComplete: boolean, // boolean 타입, 완료한 To Do인지 아닌지 여부
	value: string,
    onClick: () => void;
    deleteAllCompletedTodo?: () => void;
}
export default function ToDo({
    isComplete,
    value,
    onClick,
    deleteAllCompletedTodo
}:Props){
    //TODO: useEffect를 통해 완료한 경우 3초 후 (setTimeout)에 사라지도록 구현
    //TODO: 클린업으로 정리하도록 구현

    useEffect(() => {
        if(isComplete) {
            const time = setTimeout(() => {
                if (deleteAllCompletedTodo) {
                    deleteAllCompletedTodo();
                }
            }, 3000);
            return () => clearTimeout(time);
        }
    }, [isComplete]);
    
    return (
        <div
        className="to-do"
        data-is-complete={isComplete} // HTML의 data속성에 isComplete 값 저장
        onClick={onClick}
      >
        {/* isComplete이 true일때만 ✔️ 이모티콘 출력 */}
        <p>{isComplete && <span>&#10004;</span>}</p>
        <p>{value}</p>
      </div>
    );
}

