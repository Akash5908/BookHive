export default function InputField({ inputType, placeholderText, margin }) {
	return (
		<input
			type={inputType}
			className={`w-full my-2 p-4 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light bg-gray-900 ${margin}`}
			placeholder={placeholderText}
		/>
	)
}