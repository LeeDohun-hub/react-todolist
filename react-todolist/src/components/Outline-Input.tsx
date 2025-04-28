interface Props {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

export default function OutlineInput({
    value,
    onChange,
    placeholder,
}: Props) {
    return (
        <input
          type="text"
          className="outline-input"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)} // input의 입력 값이 변경되면 props로 받은 onChange 함수 실행
        />
      );
}
