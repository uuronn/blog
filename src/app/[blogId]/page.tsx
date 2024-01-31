import { Header } from '~/components/Header';
import { BlogDetail } from './_components/BlogDetail';

export default function BlogPage() {
  return (
    <>
      <Header breadcrumbList={[{ title: 'いっせいブログ', path: '/' }]} />
      <main color="text-red">
        <BlogDetail />
      </main>
    </>
  );
}
