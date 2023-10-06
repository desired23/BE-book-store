import Book from '../models/book.js'
import { bookSchema } from '../validations/book.js'
import Category from "../models/category.js"


export const getBooks = async (req, res) => {
    try {
        const books = await Book.find().populate("categoryId");
        if (books.length === 0) {
            return res.status(400).json({
                message: "khong tim thay san pham !"
            })
        }

        return res.status(200).json({
            message: "tim san pham thanh cong",
            data: books
        })
    } catch (err) {
        return res.status(500).json({
            message: 'loi server!',
            error: err
        })
    }
}

export const getBook = async (req, res) => {
    try {
        const books = await Book.findById(req.params.id).populate("categoryId");
        if (!books) {
            return res.status(400).json({
                message: "khong tim thay san pham !"
            })
        }
        return res.status(200).json({
            message: "tim san pham thanh cong",
            data: books
        })
    } catch (err) {
        return res.status(500).json({
            message: 'loi server!',
            error: err
        })
    }
}

export const create = async (req, res) => {
    try {
        const { error } = bookSchema.validate(req.body);
        if (error) {
            return res.status(400).json({
                message: error.details[0].message,
            });
        }

        const newBook = await Book.create(req.body);

        if (!newBook) {
            return res.status(400).json({
                message: "Thêm sách không thành công!",
            });
        }
        const categoryIds = req.body.categoryId;
        console.log(categoryIds);
        if (categoryIds && Array.isArray(categoryIds)) {
            for (const categoryId of categoryIds) {
                const category = await Category.findById(categoryId);

                if (category) {
                    category.books.push(newBook._id);
                    await category.save(); 
                }
            }
        }

        return res.status(200).json({
            message: 'Thêm sách thành công',
            data: newBook,
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Lỗi server',
            error,
        });
    }
};

export const remove =  async (req, res) => {
    try {
        const book = await Book.findByIdAndRemove(req.params.id)
        if (!book) {
            return res.status(400).json({
                message: "xoa khong thanh cong!"
            })
        }
        return res.status(200).json({
            message:'thanh cong',
            data: book
        })
    } catch (error) {
        return res.status(500).json({
            message: 'loi server',
            error,
        })                                            
    }
} 

export const update =  async (req, res) => {
    try {
        const {error} =  bookSchema.validate(req.body)
        if (error) {
            return res.status(400).json({
                message: error.details[0].message,
            })
        }
        const updateData = {...req.body,updateAt: new Date()}
        const book = await Book.findByIdAndUpdate(req.params.id, updateData)
        if (!book) {
            return res.status(400).json({
                message: "sua khong thanh cong!"
            })
        }
        return res.status(200).json({
            message:'thanh cong',
            data: book
        })
    } catch (error) {
        return res.status(500).json({
            message: 'loi server',
            error,
        })                                            
    }
}
export const deleteBooks = async (req, res) => {
    try {
        const { ids } = req.body; 
        if (!ids || ids.length === 0) {
            return res.status(400).json({
                message: "Không có sản phẩm nào để xóa."
            });
        }

        const deletedBooks = await Book.deleteMany({ _id: { $in: ids } });
        
        if (deletedBooks.deletedCount === 0) {
            return res.status(400).json({
                message: "Xóa không thành công!"
            });
        }

        return res.status(200).json({
            message: 'Xóa thành công',
            data: deletedBooks
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Lỗi server',
            error,
        });
    }
}

