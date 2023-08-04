import { getBillboard } from "@/actions/get-billboard";
import { getProducts } from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

type HomePageProps = {};

export const revalidate = 0;

async function HomePage({}: HomePageProps) {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("319e99e2-9c4f-4931-8fd1-6cb0195f6b99");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
}

export default HomePage;
