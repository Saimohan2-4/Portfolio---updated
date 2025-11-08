import Typography from "../components/general/typography"

const AboutSection = () => {
  return (
    <section className="bg-white dark:bg-black py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header Button */}
        <div className="flex justify-center mb-12">
          <button className="px-8 py-3 border-2 border-white text-white font-bold text-lg hover:bg-white hover:text-black transition-colors">
            ABOUT ME
          </button>
        </div>

        {/* Description */}
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <Typography className="text-gray-700 text-lg leading-relaxed">
            Results-driven Data Analyst with 4+ years of experience transforming complex datasets into actionable business intelligence. 
            Proven expertise in developing scalable data solutions, automating ETL pipelines, and creating interactive dashboards that drive strategic decision-making.
          </Typography>
        </div>

        {/* Separator */}
        <div className="flex items-center justify-center mb-16">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-4 text-gray-400">---</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Three Columns */}
        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-300 flex items-center justify-center opacity-50">
                <svg className="w-8 h-8 text-gray-600 dark:text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">DATA ANALYSIS</h3>
            <p className="text-gray-600 dark:text-gray-500 text-sm leading-relaxed">
              Extracting meaningful insights from complex datasets using advanced statistical methods and data visualization techniques.
            </p>
          </div>

          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-300 flex items-center justify-center opacity-50">
                <svg className="w-8 h-8 text-gray-600 dark:text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">DEVELOPMENT</h3>
            <p className="text-gray-600 dark:text-gray-500 text-sm leading-relaxed">
              Building scalable data solutions, ETL pipelines, and automated systems using Python, SQL, and cloud platforms.
            </p>
          </div>

          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-300 flex items-center justify-center opacity-50">
                <svg className="w-8 h-8 text-gray-600 dark:text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">OPTIMIZATION</h3>
            <p className="text-gray-600 dark:text-gray-500 text-sm leading-relaxed">
              Maintaining and optimizing data pipelines, dashboards, and systems for maximum performance and reliability.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection