function Sidebar_menues({name, icon_name}) {

    
  return (
 <span
          href="/explore"
          className="md:w-full w-auto flex lg:justify-start justify-center items-center gap-3 md:px-3 md:py-2 md:my-1 cursor-pointer md:hover:bg-accent md:hover:text-white rounded-lg shrink-0"
        >
          <i
            className={`ri-${icon_name}-line text-2xl rounded-full`}//ri-search-line text-2xl rounded-full
            title={`${name}`}// icon adjacent name
          ></i>
          <h2 className="font-semibold lg:flex hidden">{name}</h2>
        </span>
 
  )
}

export default Sidebar_menues