
const Error = ({mensaje}) => {
  return (
    <div className="bg-red-800 text-white text-center p-3 mb-3 uppercase font-bold rounded-md">
        <p>{mensaje}</p>
    </div>
  )
}

export default Error