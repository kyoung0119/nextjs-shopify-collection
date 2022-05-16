import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  MenuIcon,
  SearchIcon,
  ShoppingBagIcon,
  UserIcon,
  XIcon,
} from "@heroicons/react/outline";
import Link from "next/link";

const navigation = {
  categories: [
    { name: "NEW", href: "#" },
    { name: "JEWELLERY", href: "#" },
    { name: "DIAMONDS & BRIDAL", href: "#" },
    { name: "WATCHES", href: "#" },
    { name: "GIFTS", href: "#" },
    { name: "BRANDS", href: "#" },
    { name: "SALE", href: "#" },
  ],
};

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white border-b">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 flex z-40">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
                <div className="px-4 pt-5 pb-2 flex">
                  <button
                    type="button"
                    className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                  {navigation.categories.map((category) => (
                    <div key={category.name} className="flow-root">
                      <a
                        href={category.href}
                        className="-m-2 p-2 block font-medium text-gray-900"
                      >
                        {category.name}
                      </a>
                    </div>
                  ))}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative">
        <nav aria-label="Top">
          <div className="bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="h-16 flex items-center justify-between">
                <div className="hidden lg:flex-1 lg:flex lg:items-center">
                  <Link href="/" passHref>
                    <a className="cursor-pointer">
                      <span className="text-lg pt-1 font-bold">Logo</span>
                    </a>
                  </Link>
                </div>

                <div className="hidden h-full lg:flex">
                  <div className="px-4 bottom-0 inset-x-0">
                    <div className="h-full flex justify-center space-x-10">
                      {navigation.categories.map((category) => (
                        <a
                          key={category.name}
                          href={category.href}
                          className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800 uppercase"
                        >
                          {category.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex-1 flex items-center lg:hidden">
                  <button
                    type="button"
                    className="-ml-2 bg-white p-2 rounded-md text-gray-400"
                    onClick={() => setOpen(true)}
                  >
                    <MenuIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                  <a
                    href="#"
                    className=" p-2 text-gray-400 hover:text-gray-500"
                  >
                    <UserIcon className="w-5 h-5" aria-hidden="true" />
                  </a>
                </div>
                <div className="lg:hidden">
                  <Link href="/" passHref>
                    <a className="cursor-pointer">
                      <span className="text-lg pt-1 font-bold">Logo</span>
                    </a>
                  </Link>
                </div>

                <div className="flex-1 flex items-center justify-end">
                  <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                    <SearchIcon className="w-5 h-5" aria-hidden="true" />
                  </a>
                  <a
                    href="#"
                    className="p-2 text-gray-400 hover:text-gray-500 hidden lg:flex"
                  >
                    <UserIcon className="w-5 h-5" aria-hidden="true" />
                  </a>
                  <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                    <ShoppingBagIcon className="w-5 h-5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
