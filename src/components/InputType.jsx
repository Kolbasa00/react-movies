function InputType(props) {
  return (
    <label className="flex gap-4 items-center cursor-pointer">
      <input
        type="radio"
        name="type"
        className="cursor-pointer w-4 h-4 accent-green-600"
        data-type={props.type}
        onChange={props.handleFilter}
        checked={props.type === props.currentType}
      />
      <span className="text-[#9e9e9e]">{props.text}</span>
    </label>
  );
}

export default InputType;
