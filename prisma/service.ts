const prisma: any = {}; // Prisma client

const countAllProducts = async () => {
    const totalQuantity = await prisma.warehouseEntry.aggregate({
        _sum: {
            quantity: true,
        }
    });
    return totalQuantity._sum.quantity || 0;
};

const countAllProductsOnStock = async (uuid: string) => {
    const totalQuantity = await prisma.warehouseEntry.aggregate({
        where: {
            warehouseId: uuid,
        },
        _sum: {
            quantity: true,
        }
    });
    return totalQuantity._sum.quantity || 0;
};

const countProduct = async (sku: string) => {
    const totalQuantity = await prisma.warehouseEntry.aggregate({
        where: {
            productSku: sku,
        },
        _sum: {
            quantity: true,
        }
    });
    return totalQuantity._sum.quantity || 0;
};

const countProductOnStock = async (uuid: string, sku: string) => {
    const totalQuantity = await prisma.warehouseEntry.aggregate({
        where: {
            warehouseId: uuid,
            productSku: sku,
        },
        _sum: {
            quantity: true,
        }
    });
    return totalQuantity._sum.quantity || 0;
};

const countProductByCategory = async (slug: string) => {
    const totalCount = await prisma.product.count({
        where: {
            categories: {
                some: {
                    slug: slug,
                },
            },
        }
    });
    return totalCount;
};

const countProductOnStockByCategory = async (uuid: string, slug: string) => {
    const totalCount = await prisma.product.count({
        where: {
            warehouses: {
                some: {
                    warehouseId: uuid,
                },
            },
            categories: {
                some: {
                    slug: slug,
                },
            },
        }
    });
    return totalCount;
};

export default {
    countAllProducts,
    countAllProductsOnStock,
    countProduct,
    countProductOnStock,
    countProductByCategory,
    countProductOnStockByCategory
}