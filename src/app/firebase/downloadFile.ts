// import { useRef, useState } from "react";

// function downloadFile() {
//     const [download, setDownload] = useState([])
//     const downloadLink = useRef()

//     const downloadMyCollection = async () => {
//         const myCollection = collection(db, 'myCollection');
//         const data = await getDocs(myCollection);
//         setDownload(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
//     };

//     useEffect(() => {
//      if(!!download.length) downloadLink.current.click();
//     },[download]}

//     return (
//         <div>
//             <button
//                 className="downloadButton"
//                 onClick={ downloadMyCollection }>
//                 Download Responses
//             </button>

//             <a
//                 href={`data:text/json;charset=utf-8,${encodeURIComponent(
//                     JSON.stringify(download)
//                 )}`}
//                 download='export.json'
//                 className='hidden'
//                 ref={downloadLink}>
//                 isHidden
//             </a>
//         </div>
//     )
// }
