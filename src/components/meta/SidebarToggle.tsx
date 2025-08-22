import { useState, useEffect } from "preact/hooks";

export default function SidebarToggle() {
	const [expanded, setExpanded] = useState(false);

	useEffect(() => {
		const sidebar = document.getElementById("sidebar") as HTMLDivElement;
		const overlay = document.getElementById("overlay") as HTMLDivElement;

		sidebar.style.setProperty("--sidebarWidth", expanded ? "20em" : "4em");
		sidebar.dataset.expanded = expanded ? "true" : "false";

		overlay.dataset.hidden = expanded ? "false" : "true";

		const main = document.body.getElementsByTagName("main")[0];
		const closeSidebar = () => setExpanded(false);

		main.addEventListener("click", closeSidebar, { passive: true });
		overlay.addEventListener("click", closeSidebar, { passive: true })
		return () => main.removeEventListener("click", closeSidebar);
	}, [expanded]);

	return (
		<button
			onClick={ () => setExpanded(e => !e) }
			id="sidebar-toggle"
		>
			{ expanded ? "-" : "+" }
		</button>
	);
}
