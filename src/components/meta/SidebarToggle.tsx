import type { JSX } from "preact";
import { useState } from "preact/hooks";

type EmUnit = `${number}em`;
type VwUnit = `${number}vw`;

const enum SidebarWidths {
	Collapsed = "4em",
	Expanded = "20em",
}

const sidebarElem = document.getElementById("sidebar") as HTMLElement;

export default function SidebarToggle() {
	const [sidebarExpanded, setSidebarExpanded] = useState(false);
	const [buttonText, setButtonText] = useState("+");

	function setCSS(width: SidebarWidths) {
		sidebarElem.style.setProperty("--sidebarWidth", width);
	}

	function handleClick(event: JSX.TargetedMouseEvent<HTMLButtonElement>) {
		(sidebarExpanded) ?
			(
				setCSS(SidebarWidths.Collapsed),
				setButtonText("+"),
				sidebarElem.dataset.expanded = "false"
			) :
			(
				setCSS(SidebarWidths.Expanded),
				setButtonText("-"),
				sidebarElem.dataset.expanded = "true"
			);

		setSidebarExpanded(!sidebarExpanded)
	}

	return (
		<button
			onClick={ handleClick }
			id="sidebar-toggle"
		>{ buttonText }</button>
	)
}
