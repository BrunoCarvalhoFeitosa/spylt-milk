"use client"

interface ButtonProps {
  children: React.ReactNode
}

export const Button = ({ children }: ButtonProps) => {
  return (
    <a href="/" className="mt-4 relative inline-flex items-center justify-center inline-block px-10 py-4 overflow-hidden font-medium bg-milk rounded-full shadow-2xl group">
        <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-mid-brown rounded-full blur-md ease" />
        <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
            <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-dark-brown rounded-full blur-md" />
            <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-yellow-brown rounded-full blur-md" />
        </span>
        <span className="relative text-xl text-white">
          {children}
        </span>
    </a>   
  )
}