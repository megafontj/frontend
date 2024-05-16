import {Link} from "react-router-dom";

export const RightSide = () => {

    return (
        <div className='hidden lg:block my-4 mx-2 text-white'>
            <div className='bg-[#16181C] p-4 rounded-md sticky top-2'>
                <p className='font-bold text-2xl mb-2'>Рекомендация</p>
                <div className='flex flex-col gap-4'>
                    <Link
                        to={`/profile`}
                        className='flex items-center justify-between gap-4'
                    >
                        <div className='flex gap-2 items-center'>
                            <div className='avatar'>
                                <div className='w-8 rounded-full'>
                                    <img src={"/avatar-placeholder.png"} />
                                </div>
                            </div>
                            <div className='flex flex-col'>
										<span className='font-semibold tracking-tight truncate w-28'>
											Some name
										</span>
                                <span className='text-sm text-slate-500'>@username</span>
                            </div>
                        </div>
                        <div>
                            <button
                                className='btn bg-white text-black hover:bg-white hover:opacity-90 rounded-full btn-sm'
                            >
                                Подписаться
                            </button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
};