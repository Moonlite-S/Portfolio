
function BoxedDiv(
  {children}: {children: React.ReactNode}
) {
  return (
    <div className='bg-slate-500 mx-5 rounded-md my-2 p-4 text-xl'>
      {children}
    </div>
  )
}

export default BoxedDiv