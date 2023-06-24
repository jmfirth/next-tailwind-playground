"use client";
import * as React from "react";
import classNames from "classnames";
import { usePopper } from "react-popper";

export interface DropdownMenuProps {}

export const DropdownMenu: React.FC<DropdownMenuProps> = () => {
	const [open, setOpen] = React.useState(false);
	const [referenceElement, setReferenceElement] = React.useState(null);
	const [popperElement, setPopperElement] = React.useState(null);
	const [arrowElement, setArrowElement] = React.useState(null);
	const { styles, attributes, update } = usePopper(
		referenceElement,
		popperElement,
		{
			modifiers: [{ name: "arrow", options: { element: arrowElement } }],
		}
	);

	const toggle = () => {
		setOpen(!open);
		if (!update) return;
		// update();
		setTimeout(() => update(), 0);
	};

	return (
		<>
			<button
				id="dropdownNavbarLink"
				data-dropdown-toggle="dropdownNavbar"
				className="flex w-full items-center justify-between border-b border-gray-100 py-2 pl-3 pr-4 font-medium text-gray-700 hover:bg-gray-50 md:w-auto md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700"
				ref={setReferenceElement as any}
				onClick={toggle}
			>
				Dropdown{" "}
				<svg
					className="ml-1 h-4 w-4"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
						clipRule="evenodd"
					/>
				</svg>
			</button>
			{/* Dropdown menu */}
			<div
				id="dropdownNavbar"
				// className="hidden bg-white text-base z-10 list-none divide-y divide-gray-100 rounded shadow my-4 w-44"
				className={classNames({
					hidden: !open,
					"z-10 my-4 w-44 list-none divide-y divide-gray-100 rounded bg-white text-base shadow":
						true,
				})}
				ref={setPopperElement as any}
				style={styles.popper}
				{...attributes.popper}
			>
				<ul className="py-1" aria-labelledby="dropdownLargeButton">
					<li>
						<a
							href="#"
							className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
						>
							Dashboard
						</a>
					</li>
					<li>
						<a
							href="#"
							className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
						>
							Settings
						</a>
					</li>
					<li>
						<a
							href="#"
							className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
						>
							Earnings
						</a>
					</li>
				</ul>
				<div className="py-1">
					<a
						href="#"
						className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
					>
						Sign out
					</a>
				</div>
			</div>
		</>
	);
};
