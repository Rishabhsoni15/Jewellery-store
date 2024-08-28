import { varchar } from "drizzle-orm/mysql-core";
import { pgTable } from "drizzle-orm/pg-core";

export const JewListings = pgTable("JewListings", {
  // {
  //   "label": "Product Name",
  //   "name": "productname",
  //   "fieldType": "text",
  //   "required": true,
  //   "column": 2,
  //   "icon": "FaClipboardList"
  // },
  // {
  //   "label": "Original Price",
  //   "name": "originalPrice",
  //   "fieldType": "text",
  //   "column": 1,
  //   "icon": "FaDollarSign"
  // },
  // {
  //   "label": "Selling Price",
  //   "name": "sellingPrice",
  //   "fieldType": "text",
  //   "required": true,
  //   "column": 1,
  //   "icon": "FaMoneyBillAlt"
  // },
  // {
  //   "label": "Category",
  //   "name": "category",
  //   "fieldType": "dropdown",
  //   "options": [
  //     "Necklaces",
  //     "Earing",
  //     "Ring",
  //     "Pendants",
  //     "Bracelets",
  //     "Bangles"
  //   ],
  //   "required": true,
  //   "column": 1,
  //   "icon": "FaCar"
  // },
  // {
  //   "label": "Offer Type",
  //   "name": "offerType",
  //   "fieldType": "dropdown",
  //   "column": 2,
  //   "options": ["Small", "Medium", "Large"],
  //   "icon": "FaTags"
  // },
  // {
  //   "label": "Listing Description",
  //   "name": "listingDescription",
  //   "fieldType": "textarea",
  //   "required": true,
  //   "column": 2,
  //   "icon": "FaFileAlt"
  // }
  id: serial("id").primaryKey(),
  productname: varchar("productname").notNull(),
  Tagline: varchar("productname"),
  originalPrice: varchar("originalPrice").notNull(),
  sellingPrice: varchar("sellingPrice").notNull(),
  category: varchar("category").notNull(),
  offerType: varchar("offerType"),
  listingDescription: varchar("listingDescription"),
  images: varchar("images"),
  createdAt: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
});
