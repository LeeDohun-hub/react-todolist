interface Props {
    label: string;
    onClick: () => void;
}
export default function TextButton({
    label,
    onClick,
}:Props){
    return (
        <p
        className="text-button"
      onClick={onClick} // 클릭하면 props로 받은 onClick 함수 실행
        >
            {label}
        </p>
    );
}

