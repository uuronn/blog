import Link from "next/link";

type Props = {
  breadcrumbList: { title: string; path: string }[];
};

export const Header = ({ breadcrumbList }: Props) => {
  return (
    <header className="z-10 flex w-screen justify-between border-b-2 border-black bg-white px-6 py-3">
      <ul className="flex">
        {breadcrumbList.map((breadcrumb, i) => (
          <li className="text-lg text-black" key={i}>
            <Link href={breadcrumb.path} className="text-lg font-bold">
              {breadcrumb.title}
            </Link>
            {i < breadcrumbList.length - 1 && (
              <span className="mx-2 text-xl font-normal">{">"}</span>
            )}
          </li>
        ))}
      </ul>
      <Link href="/create">記事作成</Link>
    </header>
  );
};
