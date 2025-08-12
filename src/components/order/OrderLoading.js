import React from 'react'

const OrdersLoading = () => {
  return (
    <section className="mt-22 pb-10">
      

      <div className="px-20 py-5 flex flex-col gap-5">
        {[...Array(3)].map((_, cardIdx) => (
          <div
            key={cardIdx}
            className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"
          >
            <div className="bg-gradient-to-r from-gray-200 to-gray-300 h-10 w-full animate-pulse" />
            <div className="p-4">
              <div className="grid grid-cols-2 gap-3">
                {[...Array(2)].map((_, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="flex items-start bg-slate-50 rounded-md py-2 px-2 space-x-4"
                  >
                    <div className="w-16 h-16 bg-gray-200 rounded-lg flex-shrink-0 animate-pulse" />
                    <div className="flex-1 min-w-0 space-y-2">
                      <div className="h-5 bg-gray-200 rounded w-2/3 animate-pulse" />
                      <div className="h-4 bg-gray-200 rounded w-1/3 animate-pulse" />
                      <div className="flex items-center gap-2 text-sm">
                        <div className="h-4 bg-gray-200 rounded w-24 animate-pulse" />
                        <div className="h-4 bg-gray-200 rounded w-12 animate-pulse" />
                        <div className="h-4 bg-gray-200 rounded w-16 animate-pulse" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-100 pt-3 mt-2 flex items-center justify-between">
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-24 animate-pulse" />
                  <div className="h-5 bg-gray-200 rounded w-28 animate-pulse" />
                </div>
                <div className="h-9 w-36 bg-gray-200 rounded-md animate-pulse" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default OrdersLoading


