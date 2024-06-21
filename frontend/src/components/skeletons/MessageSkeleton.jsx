const MessageSkeleton = () => {
	return (
	  <>
	  <div className='py-1 '>
		  <div className="flex flex-col gap-4 w-50 ">
	  <div className="flex gap-4 items-center justify-end ">
		  <div className="flex flex-col gap-4">
		  <div className="skeleton h-12 w-28"></div>
		  </div>
		  <div className="skeleton w-12 h-12 rounded-full shrink-0"></div>
	  </div>
	  </div>
	  </div>
	  <div className='py-1 '>
		  <div className="flex flex-col gap-4 w-50 ">
	  <div className="flex gap-4 items-center ">
		  <div className="skeleton w-12 h-12 rounded-full shrink-0"></div>
		  <div className="flex flex-col gap-4">
		  <div className="skeleton h-12 w-28"></div>
		  </div>
	  </div>
	  </div>
	  </div>
	  </>
	)
  }
export default MessageSkeleton;
