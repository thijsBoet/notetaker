import { signIn, signOut, useSession } from "next-auth/react";

export const Header = () => {
	const { data: sessionData } = useSession();

	return (
		<>
			<nav className="navbar bg-primary text-primary-content">
				<header className="flex-1 pl-5 text-3xl font-bold">
					{sessionData?.user?.name
						? `Notes for ${sessionData.user.name}`
						: "Notes"}
				</header>
				<div className="flex-none gap-2">
					<div className="drop-end dropdown">
						{sessionData?.user?.name ? (
							<label
								tabIndex={0}
								className="btn-ghost avatar btn btn"
								onClick={() => void signOut()}
							>
								<div className="w-10 rounded-full">
									<img
										src={sessionData?.user?.image ?? ""}
										alt={sessionData?.user?.name ?? ""}
									/>
								</div>
							</label>
						) : (
							<button
								className="btn-ghost rounded-btn btn"
								onClick={() => void signIn()}
							>
								Sign in
							</button>
						)}
					</div>
				</div>
			</nav>
		</>
	);
};
