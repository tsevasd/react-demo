import React from "react";
import { useState } from 'react';
import { Link } from "react-router-dom";
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { IconUser, IconClose, IconHeart, IconFilm, IconSettings, IconLogout } from '../icons/all';

export default function UserMenu({user, t}){

    const [open, setOpen] = useState(false)

    return(
        <>
        <button
            className="w-12 h-12 ml-2 flex items-center justify-center rounded-full hover:bg-area/10 border border-textcolor data-[open]:bg-area/20 relative"
            onClick={() => setOpen(true)}
        >
            <IconUser iconClassName="w-6 h-6 stroke-secondary"></IconUser>
        </button>
        <Dialog open={open} onClose={setOpen} className="relative z-10">
        <div className="fixed inset-0" />
  
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <DialogPanel
                transition
                className="pointer-events-auto w-screen max-w-md transform transition duration-300 ease-in-out data-[closed]:translate-x-full"
              >
                <div className="flex h-full flex-col overflow-y-scroll bg-bodycolor py-6 shadow-xl border-l border-primary">
                    <div className="px-4 sm:px-6">
                        <div className="flex items-start justify-between">
                        <DialogTitle className="text-base font-semibold leading-6">{user.name}</DialogTitle>
                        <div className="ml-3 flex h-7 items-center">
                            <button
                            type="button"
                            onClick={() => setOpen(false)}
                            className="w-12 h-12 flex items-center justify-center  rounded-full hover:bg-area/10 focus:outline-none"
                            >
                            <IconClose iconClassName="w-8 h-8 stroke-primary"></IconClose>
                            <span className="sr-only">Close panel</span>
                            </button>
                        </div>
                        </div>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6 overflow-y-auto">
                        <ul>
                            <li className="mb-2">
                                <Link to="/favorites" className="block w-full h-12 px-4 py-2 rounded-full hover:bg-area/10 transition-colors overflow-hidden whitespace-nowrap text-left">
                                    <IconHeart iconClassName="w-8 stroke-secondary inline"></IconHeart>
                                    <span className="ml-3 align-middle">{ t('header.menu.favorites') }</span>
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/genres" className="block w-full h-12 px-4 py-2 rounded-full hover:bg-area/10 transition-colors overflow-hidden whitespace-nowrap text-left">
                                    <IconFilm iconClassName="w-8 stroke-secondary inline"></IconFilm>
                                    <span className="ml-3 align-middle">{ t('header.menu.genres') }</span>
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/settings" className="block w-full h-12 px-4 py-2 rounded-full hover:bg-area/10 transition-colors overflow-hidden whitespace-nowrap text-left">
                                    <IconSettings iconClassName="w-8 stroke-secondary inline"></IconSettings>
                                    <span className="ml-3 align-middle">{ t('header.menu.settings') }</span>
                                </Link>
                            </li>
                            <li className="text-right">
                                <button className="h-12 inline-flex items-center pr-3 pl-6 rounded-full hover:bg-area/10 transition-colors">
                                    <span className="mr-3 align-middle">{ t('header.menu.logout') }</span>
                                    <IconLogout iconClassName="w-8 h-8 stroke-error"></IconLogout>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>
      </>
    )
}
/*    <Menu>
        <MenuButton className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-area/10 border border-white data-[open]:bg-area/20 relative">
            <IconUser iconClassName="w-6 h-6 stroke-secondary"></IconUser>
        </MenuButton>
        <MenuItems className="fixed right-0 top-0 h-full bottom-0 w-96 opacity-0 bg-bodycolor border-l border-primary transition-all duration-1000 translate-x-full data-[open]:translate-x-0 data-[open]:opacity-100">
            <MenuItem>
            <div className="block py-1 hover:bg-area/10">EN</div>
            </MenuItem>
            <MenuItem>
            <div className="block py-1 hover:bg-area/10">EL</div>
            </MenuItem>
        </MenuItems>
    </Menu>*/