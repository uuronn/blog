import { Header } from '~/components/Header';
import { BlogList } from './_components/BlogList';

export default function IndexPage() {
  return (
    <>
      <Header breadcrumbList={[{ title: 'いっせいブログ' }]} />

      <main className="p-6">
        <BlogList />
      </main>
    </>
  );
}
