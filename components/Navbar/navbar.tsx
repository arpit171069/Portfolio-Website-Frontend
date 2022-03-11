import { NextPage } from 'next';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0';
import { Spinner } from '../';
import Image from 'next/image';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { AiOutlineLogout } from 'react-icons/ai';

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const UserProfile: NextPage = () => {
    const { user, error, isLoading } = useUser();
    if (isLoading) return <Spinner loading />;
    if (error) return <div>{error.message}</div>;
    if (user) {
        return (
            <Menu as="div" className="relative inline-block text-left">
                <Menu.Button className="w-53 h-53 rounded-full flex items-center justify-center p-2 usericon user-select-none">
                    <Image src={user.picture!} className="rounded-full z-10" alt={user.name!} layout="fill"></Image>
                </Menu.Button>

                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none z-50">
                        <div className="py-1">
                            <Menu.Item>
                                {({ active }) => (
                                    <a
                                        href="/api/auth/logout"
                                        className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'flex px-4 py-2 text-sm items-center'
                                        )}
                                    >
                                        <AiOutlineLogout className="mr-2" />
                                        <span>Logout</span>
                                    </a>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        );
    }
    return <Link href='/api/auth/login'><div className="text-xl primary-btn rounded-lg p-0.5 cursor-pointer text-white px-8"><span>Login/Signup</span></div></Link>;
}
export const Navbar: NextPage = () => {
    return (
        <nav className="fixed top-0 left-0 my-2 right-0 bg-transparent flex 2xl:mx-48 lg:mx-36 md:mx-12 sm:mx-4 mx-2 justify-between items-center z-2 font-quicksand">
            <Link href='/'><a className="cursor-pointer w-150 h-125 relative"><Image src="/logo.gif" layout="fill" alt="Arpit Verma Portfolio Logo"></Image></a></Link>
            <UserProfile />
        </nav>
    );
}