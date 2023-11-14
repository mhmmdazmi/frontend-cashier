const CategoryDetail = ({ params }: {params: { categoryId: string }}) => {
    return <div>Category {params.categoryId[1]}</div>;
};

export default CategoryDetail