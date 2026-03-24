export default function Movie({ title, imgUrl, year, type }) {
  return (
    <div className="shadow-2xl rounded-sm">
      {imgUrl === "N/A" ? (
        <div className="w-full h-80 bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500 text-sm">Нет изображения</span>
        </div>
      ) : (
        <img src={imgUrl} alt="img" className="rounded-sm" />
      )}
      <div className="p-6">
        <p className="text-2xl mb-2 line-clamp-2">{title}</p>
        <div className="flex justify-between">
          <p>{year}</p>
          <p>{type}</p>
        </div>
      </div>
    </div>
  );
}
