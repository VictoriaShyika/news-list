import { ItemPrymary } from '../../../../lib/elements/item';
import { ItemLayout, ItemsLayout } from '../../../../lib/elements/layout';
export function NewsListBoardComponent(props) {
  const { newsList, pageLoading, isSuccess } = props;

  return (
    <>
      <ItemsLayout>
        {isSuccess &&
          newsList.map((item) => (
            <ItemLayout key={item.id}>
              <ItemPrymary
                title={item.title}
                description={item.description}
                img={item.fileImage.url}
              />
            </ItemLayout>
          ))}
      </ItemsLayout>
    </>
  );
}
