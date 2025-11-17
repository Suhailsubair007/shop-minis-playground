import { useState } from "react";

export default function SizeGuide() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Open Button */}
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 bg-black text-white rounded-lg text-sm"
      >
        Size Guide
      </button>

      {/* Modal Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
        >
          {/* Modal Box */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-11/12 max-w-md bg-white rounded-xl p-5 shadow-lg"
          >
            <h2 className="text-lg font-semibold mb-4">Size Guide</h2>

            {/* Table */}
            <div className="overflow-hidden rounded-md border border-gray-300">
              <table className="w-full border-collapse text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border p-2 font-medium">Height (cm)</th>
                    <th className="border p-2 font-medium">Chest (in)</th>
                    <th className="border p-2 font-medium">Suggested Size</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className="border p-2 text-center">160 – 170</td>
                    <td className="border p-2 text-center">36 – 38</td>
                    <td className="border p-2 text-center font-semibold">S</td>
                  </tr>
                  <tr>
                    <td className="border p-2 text-center">170 – 178</td>
                    <td className="border p-2 text-center">38 – 40</td>
                    <td className="border p-2 text-center font-semibold">M</td>
                  </tr>
                  <tr>
                    <td className="border p-2 text-center">178 – 186</td>
                    <td className="border p-2 text-center">40 – 42</td>
                    <td className="border p-2 text-center font-semibold">L</td>
                  </tr>
                  <tr>
                    <td className="border p-2 text-center">186+</td>
                    <td className="border p-2 text-center">42+</td>
                    <td className="border p-2 text-center font-semibold">XL</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="mt-5 w-full py-2 bg-black text-white rounded-lg text-sm"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
