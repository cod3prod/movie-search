export default function Footer() {
  return (
    <footer className="bg-linear-to-b from-gray-900 to-black text-gray-400 py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Movie Search</h3>
            <p className="text-sm text-gray-400">
              당신이 찾는 모든 영화 정보를 한 곳에서 만나보세요.
            </p>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">기능</h3>
            <ul className="space-y-2 text-sm">
              <li>영화 검색</li>
              <li>즐겨찾기</li>
              <li>상세 정보</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Powered By</h3>
            <ul className="space-y-2 text-sm">
              <li>OMDB API</li>
              <li>Next.js</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2024 Movie Search. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
