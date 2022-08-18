import { WarehouseData } from "../../context/WarehouseContext";
import { useState } from "react";
import SelectedProducts from "../SelectedProducts/SelectedProducts";
import Header from "../Header/Header";
const MoveProduct = () => {
  const [serial, setSerial] = useState("");
  const { products, warehouses, users, updateValues } = WarehouseData();
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [errors, setErrors] = useState("");
  const [shelf, setShelf] = useState("");
  console.log(selectedProducts);
  const handleSubmit = (e) => {
    e.preventDefault();
    const serialExist = products.some((el) => el.id === serial);
    setErrors("");
    if (!serialExist) {
      return setErrors(`There is no product with serial ${serial}`);
    }
    const sameSelected = selectedProducts.some((el) => el.id === serial);
    if (sameSelected) {
      return setErrors(`The serial ${serial} already exists`);
    }
    const currentProduct = products.find((el) => el.id === serial);
    return setSelectedProducts((prev) => [...prev, currentProduct]);
  };
  const [showSubmit, setShowSubmit] = useState(false);
  const toggleActive = () => {
    setShowSubmit((prev) => !prev);
  };
  const handleSubmitMove = (e) => {
    e.preventDefault();
    console.log(selectedProducts);
  };
  return (
    <>
      <Header text={"Move Product"} />
      <div className="input-section">
        <form onSubmit={handleSubmit} autoComplete="new-password">
          <p>Create Product</p>
          <div className="flex flex-col py-2">
            <label className="py-2 font-medium">Serial</label>
            <input
              onChange={(e) => setSerial(e.target.value)}
              value={serial}
              className="border p-3"
              type="text"
              autoComplete="new-password"
            />
          </div>
          {errors !== "" ? <div>{errors}</div> : ""}
          <button className="border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white">
            Add
          </button>
        </form>
      </div>

      <div className="input-section">
        <SelectedProducts selectedProducts={selectedProducts} />
      </div>

      <div
        className={`move-products ${
          selectedProducts.length < 1 ? "empty" : ""
        } ${showSubmit ? "active" : ""}`}
        id="move-products"
      >
        <button
          className="btn-submit move-button"
          id="move-btn"
          onClick={toggleActive}
        >
          move products
          <span className="counter">{selectedProducts.length}</span>
        </button>

        <form
          // action=""
          className="move-products-form"
          id="move-products-form"
          autoComplete="new-password"
          onSubmit={handleSubmitMove}
        >
          <div className="input-container">
            <label htmlFor="shelf_barcode">
              <p className="label-header">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <rect width="20" height="20" fill="url(#shelf)" />
                  <defs>
                    <pattern
                      id="shelf"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use xlinkHref="#image0_22_333" transform="scale(0.02)" />
                    </pattern>
                    <image
                      id="image0_22_333"
                      width="50"
                      height="50"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACHUlEQVRoge2YO2gUURSG/yNhCeIiBpIiYmk6q5RJYUBIZXqbFCHYBQsF25QWCRrsLFNJqhArsUgkthaSVOkV8gCLgA+U/VJkEq43OzsP7+wsw/3gFmfunXPOD/+57I4UiUQiEUmAAbPA+2TNAlZ3X7kBWsA8sMdVDoAnwPW6+0wFGAWeA1+7CPA5Al4At+vu+xLgLrAG/MghwOc3sA7cq6t51/+djGb3k9WLDv2cI3r73+cT8PCiMWAaeJdDeHVzRH7/Z1oFmCCfFcPNEdAGXgE/M4oeAsvAWIHcY8k7hxm5fwEvgRtlRbSA3Ywi+8AiMFyqyHmd4SRH1hx9BFplCiymJKxkMMl3gSyUSbzhJenbVUn6HL0tk2zbS7JUQc9ZPSx5PWynnb1WIG8nQG9FyV2ziJCBJgoZNIZCJQKGJLULvnZqZn9D1A8mRNK0pNRbJYUZSTshijfGWlHIoFGlkBNJI946qapYyGH3wcy+//MAqKpYtNagUdpawJwk9xfxLe/ITeCD/8yLVwDXfq/NbKtMP/8zI3ckPeix38rYl6RJL94s20xjrNUYISGv3wNJq07clrTinXkm6dSJn0qaCFE8pJBvZvbmIgBGdVXIupkdO2ceKZCQxlirMUKKWGsK+OPG3v448NiJu/3JmgfcGRkvWCOV1A9syaeX+3kT9YkdM5vpttEYazVGSK8Z+SwpyIeBgHypu4FIJBIJwxnQ/XysVJKfVgAAAABJRU5ErkJggg=="
                    />
                  </defs>
                </svg>
                Scan the shelf
              </p>
            </label>
            <div>
              <input
                type="text"
                className="input-field"
                id="shelf_barcode"
                name="shelf_barcode"
                onChange={(e) => setShelf(e.target.value)}
                value={shelf}
              />
            </div>
          </div>
          <div className="error" id="errorMessageSave">
            <p className="flex-item ">
              <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <rect
                  x="0.916626"
                  width="14.8611"
                  height="15"
                  fill="url(#errorSave)"
                />
                <defs>
                  <pattern
                    id="errorSave"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlinkHref="#image0_22_519"
                      transform="translate(0 0.00462964) scale(0.02 0.0198148)"
                    />
                  </pattern>
                  <image
                    id="image0_22_519"
                    width="50"
                    height="50"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADPklEQVRoge2aPWgUURSFzzUiBJLgD2gwEhAkTYhoIYhgJYqgURsRRETwF7RQEH/AQiKBFIKFNoJdTBHxFxHBRlFUDAhGEIyKKGIQjYWiEEPIZ5EJbJ47+97szGQV9zSz8969550zs/e9t7MjVVFFFaVgoYFAu6SdkhbkJ2cSPki6YGa3MmMEOqkcToVo9N4RYIWkh6mvRjosN7MnpQKmBZBszkhMGmzxBYQYmZ+BkLRo8gWEGAmeEHKEV0OIkX8C/5WRkdxV+OHVEGLkdgZC0sK7KAYVMrBB0mpJM9IqSogRSXfM7OYUj1tFFRMIrZEGSUtUmRp5ZmbfUzMBi4GhCu5+h4A2n86Q6Xe/pDmpr0j5mBNpKIkQI7PSa0mN2b6Av3WL8i1pwt9k5K6kdkkNZjZTUq2k9ZIeZMIOXMq5mMeAY0DRGRQwxn+llsT0TNymw1kz64rrNDMkPfKRVPqr9U7S0SyIKm3kuJkNT5wANcA5YAA4C9RkNlKONfLYrQvgoBNzMEsj53MwMYZTwMBs4KsT9xXwriGhRtqALxkb6S0yzpmY2DMhOkM3jfWSliq7TWO/mX0p4F8k6UUM/4ikVjN7k9HY+QG46rmDVyqt0QtgpSP6IrAD6HHaV1ZaaywYX7X7CsRedfqvF/T1EbP6S4ErO7BJ0iqlq5HXZnbaadsqaVnB+X2n/66kjdHnZVF8T1mjA9s8399QbHR4a4H3TswBJ2a/0/8eqC2mM2RlX1vWFZiMe2Z2w2k7JKk5IU9zlPcHQoyknXLHJB0ubADmqvw91nGg0W2cir1Wt5k9ddo6JDUUiXVrtlgN10k6mVgF6fZaP4EFDl8rMBoTf82JvRYTNwq0JjXSm8JIRxG+256cbmB7dCyFZM+kid8D+TAI1Dlca8rkisOaJEaWlznIToenBngekPcDeBodfXhOkt8sQEdCE/3uAMDugLy3wPwovgl4F5CzW0r2wsA6jb8wEDL3d5nZ5YLcekmvJP0xbTo4YWadBXknJPn+Z/8kqSX44UP0BkK5byEckd+EJM1zzkNyGiP+/EH4s+NhYBewENgD/ArM+zwlfz0DA5Jachzi5VQ9RdkraTAn7o+S9v0GetY80t+3Zu4AAAAASUVORK5CYII="
                  />
                </defs>
              </svg>
              <span className="error-message"></span>
            </p>
            {/* <a
              href="#"
              className="close-button flex-item "
              onClick="toggleActive('errorMessageSave',event)"
            >
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <rect
                  x="0.277832"
                  width="19.8148"
                  height="20"
                  fill="url(#closeButtonErrorSave)"
                />
                <defs>
                  <pattern
                    id="closeButtonErrorSave"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlinkHref="#image0_22_520"
                      transform="translate(0 0.00462961) scale(0.02 0.0198148)"
                    />
                  </pattern>
                  <image
                    id="image0_22_520"
                    width="50"
                    height="50"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAEC0lEQVRoge2aPYwVVRTH/yNr4aLsJvtBKYskNhQaGwo/GhALs0ElEBoTK1CyRnYb6AhBYkywIjYaPwqyuMbKxF4FXC20WuNqgwlZP3DXXdZosS4/ipkXxjP33rl33jxs3r+bvHPO//znzNxz7p0n9dFHHyFkbQYDxiQ9JekRSQ9LGpN0f/HzX5J+l/SjpO8kfZ5l2R9t8ncFYAg4DswDt4jHJnAVeAUY+j8FDAOvA2sJyfuwCpy964KAI8AvLQiwWAION8kp6R0Btkp6W9KLAbM1SV9KWpD0c3EtSUOSHpS0W9ITkrYFYnwg6XiWZX+n5BcFYAz4xnMnN4CLwF5gS0SsLcDTwGzh68LXwGgvRHzvIZwFdnQReycw54m90JoYYKunEjeAZ1shyXkmgWUHzzww2AbBh47gP3RThQDXBLDo4Huv28BHPCLGW8rdxTnuEXOoacBhqkvsjV5UwsE94XjMloDQSucNds5xV5zvBLAHmGrAMQXs8fw26eA/k0owTN5ty5gNiOh09+kEjunCZy0gxq5mf5LS/clnpzI2XI8U8BiwYmxPRcQ/YXycYsiXZttnjqUImTfOFz12U7jhrUypEhbOR5O8T5VxJVbECPlkWsbegP1rnsQqlaFaiQ5OBuLvN7abxDRJ4KBxXKVm7Ajc5ekUG0/sAaoT9vMxQs4ap09rnWoSbSqiFPsz41e/egEfG6c3YshqxDQWUcR90/h+ZG3ucfjZrn0tljDLsrckzUSYzhS2sbA5bLcGLiEPmOv1BMKOmBMBk1OJIiTpprm2OTqFtIHQhq3VA48OXEJsBSrqQyie/dAdP5fyfhSwM1blKXEJ+c1cRw+JRYLnI0zPJ4qxOfxqDVxCFs317himgIgZuReAFDE2B5ujM6EXzFK3CgzU+PSyId4L3DQ+z8UIcY0o+wL20WMHCeNMyecZY7sJjNQKKZyvGmffCH83hsZLxu5ylIjC+WXjvAHsdNiV9yK1IgJifGP8LuBfY3s0RcgQ1Y3VnMe2lxurT0wOK6Rud6kOjwCTATFtb3UPOPhPp3J0qrJkAi0DE8nB0rkforrzvA4kNedywMOOu7JIb4+DtgM/OXgPdhv4fY+Y1itTVMIl4p02gg+SHyhbLON5ZxryHHA8TgBfAfe1RTJKfqDswhyOpTkh9i6qq1MHC8Q2vwTCUaqnKx1skJ927KdmnCliDZB37EtU+0S5EtEiUj/0DEq6IOmlgNm67nzouab/fujZoXwAfFzh7cG7kl7NsuyflPySARyiujS3get0uzo1ELMNOEN+jNktVoDTNO0TLQo6BlyhOjWHsAlcBo7S5JTdoO0/DIxIelLSo8r/MDCuO+/CuvI/DCxK+lbSF1mWrbTJ30cfffhxG9JFx80IylMyAAAAAElFTkSuQmCC"
                  />
                </defs>
              </svg>
            </a> */}
          </div>
          <button type="submit" className="btn-submit">
            save
          </button>
          {/* <a
            href=""
            className="close-button"
            onClick="toggleActive('move-products',event)"
            tabindex="-1"
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <rect
                x="0.277832"
                width="40"
                height="40"
                fill="url(#closeButtonShelf)"
              />
              <defs>
                <pattern
                  id="closeButtonShelf"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0_22_520"
                    transform="translate(0 0.00462961) scale(0.02 0.0198148)"
                  />
                </pattern>
                <image
                  id="image0_22_520"
                  width="50"
                  height="50"
                  xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAEC0lEQVRoge2aPYwVVRTH/yNr4aLsJvtBKYskNhQaGwo/GhALs0ElEBoTK1CyRnYb6AhBYkywIjYaPwqyuMbKxF4FXC20WuNqgwlZP3DXXdZosS4/ipkXxjP33rl33jxs3r+bvHPO//znzNxz7p0n9dFHHyFkbQYDxiQ9JekRSQ9LGpN0f/HzX5J+l/SjpO8kfZ5l2R9t8ncFYAg4DswDt4jHJnAVeAUY+j8FDAOvA2sJyfuwCpy964KAI8AvLQiwWAION8kp6R0Btkp6W9KLAbM1SV9KWpD0c3EtSUOSHpS0W9ITkrYFYnwg6XiWZX+n5BcFYAz4xnMnN4CLwF5gS0SsLcDTwGzh68LXwGgvRHzvIZwFdnQReycw54m90JoYYKunEjeAZ1shyXkmgWUHzzww2AbBh47gP3RThQDXBLDo4Huv28BHPCLGW8rdxTnuEXOoacBhqkvsjV5UwsE94XjMloDQSucNds5xV5zvBLAHmGrAMQXs8fw26eA/k0owTN5ty5gNiOh09+kEjunCZy0gxq5mf5LS/clnpzI2XI8U8BiwYmxPRcQ/YXycYsiXZttnjqUImTfOFz12U7jhrUypEhbOR5O8T5VxJVbECPlkWsbegP1rnsQqlaFaiQ5OBuLvN7abxDRJ4KBxXKVm7Ajc5ekUG0/sAaoT9vMxQs4ap09rnWoSbSqiFPsz41e/egEfG6c3YshqxDQWUcR90/h+ZG3ucfjZrn0tljDLsrckzUSYzhS2sbA5bLcGLiEPmOv1BMKOmBMBk1OJIiTpprm2OTqFtIHQhq3VA48OXEJsBSrqQyie/dAdP5fyfhSwM1blKXEJ+c1cRw+JRYLnI0zPJ4qxOfxqDVxCFs317himgIgZuReAFDE2B5ujM6EXzFK3CgzU+PSyId4L3DQ+z8UIcY0o+wL20WMHCeNMyecZY7sJjNQKKZyvGmffCH83hsZLxu5ylIjC+WXjvAHsdNiV9yK1IgJifGP8LuBfY3s0RcgQ1Y3VnMe2lxurT0wOK6Rud6kOjwCTATFtb3UPOPhPp3J0qrJkAi0DE8nB0rkforrzvA4kNedywMOOu7JIb4+DtgM/OXgPdhv4fY+Y1itTVMIl4p02gg+SHyhbLON5ZxryHHA8TgBfAfe1RTJKfqDswhyOpTkh9i6qq1MHC8Q2vwTCUaqnKx1skJ927KdmnCliDZB37EtU+0S5EtEiUj/0DEq6IOmlgNm67nzouab/fujZoXwAfFzh7cG7kl7NsuyflPySARyiujS3get0uzo1ELMNOEN+jNktVoDTNO0TLQo6BlyhOjWHsAlcBo7S5JTdoO0/DIxIelLSo8r/MDCuO+/CuvI/DCxK+lbSF1mWrbTJ30cfffhxG9JFx80IylMyAAAAAElFTkSuQmCC"
                />
              </defs>
            </svg>
          </a> */}
        </form>
      </div>
    </>
  );
};
export default MoveProduct;
