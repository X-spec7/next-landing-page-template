import CustomButton from "../../Common/CustomButton";

const Features = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white dark:bg-gray-dark py-20 flex flex-col"
      >
        <div className="container flex flex-col">

          <div className="flex justify-between items-center w-full">
            <div className="flex flex-col justify-start">
              <p className="text-purple-400 text-semibold">Booster packs</p>
              <p className="text-3xl font-semibold pt-4">Popular booster packs</p>
            </div>
            <div className="flex flex-col justify-end w-40">
              <CustomButton href="/booster-packs" variant="solid">
                View all packs
              </CustomButton>
            </div>
          </div>

          <p className="text-gray-500 text-xl max-w-[700px] pt-4">
            Dive into our custom curated packs, each offering a unique Magic: The Gathering experience.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-20">

            {/* Grid Item 1 */}
            <div className="flex flex-col">
              {/* Image */}
              <div className="h-64 mb-4 rounded">
                <img src="/images/1.png" alt="Card image" className="w-full h-full object-cover rounded-lg" />
              </div>

              {/* Price */}
              <p className="text-lg font-medium text-purple-600 mb-2">$19.99</p>

              {/* Title with arrow */}
              <div className="flex items-center justify-between mb-2 group cursor-pointer">
                <p className="text-lg font-semibold my-2 pr-2 group-hover:text-purple-600 transition-colors duration-200">
                  Commander Staples
                </p>
                <svg 
                  className="w-4 h-4 transform rotate-45 text-gray-500 group-hover:text-purple-600 transition-colors duration-200" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M5 10l7-7m0 0l7 7m-7-7v18" 
                  />
                </svg>
              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Build your dream deck with cards every Commander player covers. From mana rocks to game-ending bombs, find your next powerhouse.
              </p>

              {/* Tags */}
              <div className="flex space-x-2">
                <span className="px-2 py-1 rounded-2xl text-sm font-medium bg-purple-100 text-purple-600 border border-purple-600">Commander/EDH</span>
                <span className="px-2 py-1 rounded-2xl text-sm font-medium bg-blue-100 text-blue-600 border border-blue-600">Lands</span>
                <span className="px-2 py-1 rounded-2xl text-sm font-medium bg-red-100 text-red-600 border border-red-600">Mana rocks</span>
              </div>
            </div>

            {/* Grid Item 2 */}
            <div className="flex flex-col">
              {/* Image */}
              <div className="h-64 mb-4 rounded">
                <img src="/images/1.png" alt="Card image" className="w-full h-full object-cover rounded-lg" />
              </div>

              {/* Price */}
              <p className="text-lg font-medium text-purple-600 mb-2">$19.99</p>

              {/* Title with arrow */}
              <div className="flex items-center justify-between mb-2 group cursor-pointer">
                <p className="text-lg font-semibold my-2 pr-2 group-hover:text-purple-600 transition-colors duration-200">
                  Commander Staples
                </p>
                <svg 
                  className="w-4 h-4 transform rotate-45 text-gray-500 group-hover:text-purple-600 transition-colors duration-200" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M5 10l7-7m0 0l7 7m-7-7v18" 
                  />
                </svg>
              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Build your dream deck with cards every Commander player covers. From mana rocks to game-ending bombs, find your next powerhouse.
              </p>

              {/* Tags */}
              <div className="flex space-x-2">
                <span className="px-2 py-1 rounded-2xl text-sm font-medium bg-purple-100 text-purple-600 border border-purple-600">Commander/EDH</span>
                <span className="px-2 py-1 rounded-2xl text-sm font-medium bg-blue-100 text-blue-600 border border-blue-600">Lands</span>
                <span className="px-2 py-1 rounded-2xl text-sm font-medium bg-red-100 text-red-600 border border-red-600">Mana rocks</span>
              </div>
            </div>

            {/* Grid Item 3 */}
            <div className="flex flex-col">
              {/* Image */}
              <div className="h-64 mb-4 rounded">
                <img src="/images/1.png" alt="Card image" className="w-full h-full object-cover rounded-lg" />
              </div>

              {/* Price */}
              <p className="text-lg font-medium text-purple-600 mb-2">$19.99</p>

              {/* Title with arrow */}
              <div className="flex items-center justify-between mb-2 group cursor-pointer">
                <p className="text-lg font-semibold my-2 pr-2 group-hover:text-purple-600 transition-colors duration-200">
                  Commander Staples
                </p>
                <svg 
                  className="w-4 h-4 transform rotate-45 text-gray-500 group-hover:text-purple-600 transition-colors duration-200" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M5 10l7-7m0 0l7 7m-7-7v18" 
                  />
                </svg>
              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Build your dream deck with cards every Commander player covers. From mana rocks to game-ending bombs, find your next powerhouse.
              </p>

              {/* Tags */}
              <div className="flex space-x-2">
                <span className="px-2 py-1 rounded-2xl text-sm font-medium bg-purple-100 text-purple-600 border border-purple-600">Commander/EDH</span>
                <span className="px-2 py-1 rounded-2xl text-sm font-medium bg-blue-100 text-blue-600 border border-blue-600">Lands</span>
                <span className="px-2 py-1 rounded-2xl text-sm font-medium bg-red-100 text-red-600 border border-red-600">Mana rocks</span>
              </div>
            </div>

            {/* Add more grid items as needed */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
