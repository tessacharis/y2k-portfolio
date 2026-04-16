import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { addPropertyControls, ControlType } from "framer"
import { Table, Form, FormCheck, Button } from "react-bootstrap"
import MQFontAwesome from "https://framer.com/m/MQFontAwesome-rhyL.js@pCZpDB5nFbEjRVcfqqEf"
import MQBadge from "https://framer.com/m/MQBadge-Q8AW.js@cJL08rj7lg5EUYr7WnTH"

export default function FramerTable(props) {
    const {
        style,
        jsonFile,
        tableHeadings,
        numberOfRows,
        selectable,
        scrollHeight,
        sortableColumns,
        showBadge,
        showManageFunctions,
        truncateContent,
        manageBtns,
        fontStyle,
    } = props
    const [data, setData] = useState([{}])
    var tableHeadingsParsed = tableHeadings.split(",")
    let [allSelected, setAllSelected] = useState(false)
    let [fullSelection, setFullSelection] = useState(false)

    useEffect(() => {
        fetch(jsonFile, { method: "get" })
            .then(function (response) {
                return response.json()
            })
            .then(function (myJson) {
                setData(myJson)
            })
    }, [jsonFile])
    var dataAsArrayOfArrays = data.map((el) => Object.values(el))

    if (dataAsArrayOfArrays.length <= 1) {
        var n = tableHeadingsParsed.length
        var col = Array(n).fill(" ")
        dataAsArrayOfArrays = Array(numberOfRows).fill(col)
    }

    function checkIfEmailInString(text) {
        var re =
            /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/
        if (re.test(text)) {
            var emailContent = "<a href='mailto:" + text + "'>" + text + "</a>"
            return <div dangerouslySetInnerHTML={{ __html: emailContent }} />
        }
        return text
    }

    var dataRows = dataAsArrayOfArrays.slice(0, numberOfRows)
    return (
        <div
            style={{
                backgroundColor: "white",
                width: "100%",
                overflow: "auto",
                height: scrollHeight + "px",
            }}
        >
            <Table responsive className="mq-table" id="framer-table">
                <thead>
                    <tr>
                        {selectable && (
                            <th>
                                <Form.Check
                                    id="all"
                                    name="selectAll"
                                    type={"checkbox"}
                                    onChange={(e) =>
                                        setAllSelected(e.target.value)
                                    }
                                />
                            </th>
                        )}
                        {tableHeadingsParsed.map((heading, index) => {
                            return (
                                <th>
                                    {heading != " " ? (
                                        <>
                                            {heading.length > 30
                                                ? heading.substring(0, 30) +
                                                "..."
                                                : heading}
                                            {sortableColumns && (
                                                <Button
                                                    className="sort-btn"
                                                    aria-label="Sort"
                                                >
                                                    <MQFontAwesome
                                                        fontSize={14}
                                                        variant="fas"
                                                        icon="sort"
                                                        color="#2A68DB"
                                                    />
                                                </Button>
                                            )}
                                        </>
                                    ) : (
                                        <span className="loading-state"> </span>
                                    )}
                                </th>
                            )
                        })}
                        {showManageFunctions && <th>Manage</th>}
                    </tr>
                </thead>
                <tbody>
                    {allSelected && (
                        <tr className="sub-table-heading">
                            <td colSpan="100%">
                                {fullSelection ? (
                                    <span className="selection-text">
                                        All 100 participants are selected.
                                    </span>
                                ) : (
                                    <span className="selection-text">
                                        All 20 participants on this page are
                                        selected.
                                    </span>
                                )}
                                <Button
                                    className="btn-secondary mr-sm"
                                    onChange={(e) => setFullSelection(true)}
                                >
                                    Select all 100 participants
                                </Button>
                            </td>
                        </tr>
                    )}
                    {dataRows.map((row, index) => {
                        if (row.length == 1) {
                            return (
                                <tr className="sub-table-heading">
                                    <td colSpan="100%">{row[0]}</td>
                                </tr>
                            )
                        } else {
                            return (
                                <tr style={{ fontStyle: fontStyle }}>
                                    {selectable && (
                                        <td>
                                            {allSelected ? (
                                                <Form.Check
                                                    type={"checkbox"}
                                                    checked={true}
                                                />
                                            ) : (
                                                <Form.Check
                                                    type={"checkbox"}
                                                    checked={false}
                                                />
                                            )}
                                        </td>
                                    )}
                                    {row.map((column, index) => (
                                        <td>
                                            {index == 0 && showBadge ? (
                                                <MQBadge name={column} />
                                            ) : (
                                                <>
                                                    {column != " " ? (
                                                        <span>
                                                            {column.length >
                                                                60 &&
                                                                truncateContent
                                                                ? column.substring(
                                                                    0,
                                                                    60
                                                                ) + "..."
                                                                : checkIfEmailInString(
                                                                    column
                                                                )}
                                                        </span>
                                                    ) : (
                                                        <span
                                                            className="loading-state"
                                                            style={{
                                                                width:
                                                                    Math.floor(
                                                                        Math.random() *
                                                                        100
                                                                    ) + 30,
                                                            }}
                                                        >
                                                            {" "}
                                                        </span>
                                                    )}
                                                </>
                                            )}
                                        </td>
                                    ))}
                                    {showManageFunctions && (
                                        <td className="manage-column">
                                            {manageBtns && manageBtns[0] ? (
                                                <span>{manageBtns[0]}</span>
                                            ) : (
                                                <span className="loading-state">
                                                    {" "}
                                                </span>
                                            )}
                                        </td>
                                    )}
                                </tr>
                            )
                        }
                    })}
                </tbody>
            </Table>
            <style>{css}</style>
        </div>
    )
}

FramerTable.defaultProps = {
    jsonFile: "", // If no file, shows loading state
    tableHeadings: "Heading 1,Heading 2,Heading 3,Heading 4", // Replace with " , , , " for blank/loading state headinds
    numberOfRows: 20,
    scrollHeight: 500,
    selectable: true,
    showBadge: false,
    sortableColumns: true,
    showManageFunctions: true,
    fontStyle: "Regular",
}

addPropertyControls(FramerTable, {
    jsonFile: {
        type: ControlType.File,
        title: "Json file",
        allowedFileTypes: ["json"],
    },
    tableHeadings: {
        type: ControlType.String,
        title: "Table Heading",
        placeholder: "Enter table headings, seperated by commas",
        displayTextArea: true,
    },
    numberOfRows: {
        type: ControlType.Number,
        title: "Number of Rows",
        min: 0,
        max: 50,
    },
    scrollHeight: {
        type: ControlType.Number,
        title: "Scroll Height",
        min: 250,
        max: 3000,
    },
    selectable: {
        type: ControlType.Boolean,
        title: "Selectable",
        enabledTitle: "Show",
        disabledTitle: "Hide",
    },
    sortableColumns: {
        type: ControlType.Boolean,
        title: "Sortable",
        enabledTitle: "Show",
        disabledTitle: "Hide",
    },
    showBadge: {
        type: ControlType.Boolean,
        title: "Show Badge",
        enabledTitle: "Show",
        disabledTitle: "Hide",
    },
    showManageFunctions: {
        type: ControlType.Boolean,
        title: "Manage Column",
        enabledTitle: "Show",
        disabledTitle: "Hide",
    },
    truncateContent: {
        type: ControlType.Boolean,
        title: "Truncate Content",
        enabledTitle: "True",
        disabledTitle: "False",
    },
    manageBtns: {
        type: ControlType.ComponentInstance,
        title: "Manage Button Instance",
    },
    fontStyle: {
        type: ControlType.Enum,
        title: "Variant",
        options: ["regular", "italic", "bold"],
        optionTitles: ["Regular", "Italic", "Bold"],
    },
})

const css = `
.mq-table > a,
.mq-table > a:link,
.mq-table > a:visited,
.mq-table > a:active {
   color: #2A68DB;
   text-decoration: none;
}
.mq-table > a:hover {
   color: #453776;
   text-decoration: none;
}
.mq-table {
   border-collapse: seperate;
   font-family: "Lato", Helvetica, sans-serif;
   color: #444;
   font-size: 14px;
   line-height: 1.5;
   width: 100%;
   border-spacing: 0;
}
.mq-table.table thead tr th {
   border-bottom: 2px solid #453776;
   border-top: 1px solid #e1e1e1;
   position: sticky;
   top: 0;
   background-color: #fff;
}
tr {
   border-bottom: 1px solid #e1e1e1;
}
.sort-btn {
   cursor: pointer;
   border: 0;
   background: transparent;
   margin-left: 10px;
}


.sort-btn:hover {
   color: #453776 !important;
}
th {
   overflow: hidden;
   white-space: nowrap;
   text-overflow: ellipsis;
   vertical-align: middle;
   text-align: left;
   padding: 10px;
}
td {
   padding: 0.25rem 0.75rem;
   vertical-align: middle;
   white-space: pre-wrap;
}
td:last-child {
   border-bottom: 0px;
}
tbody tr:nth-child(odd) {
   background-color: #f7f7f7;
}
.fa {
   font-family: "Font Awesome Pro";
}
td.manage-column {
   display: block;
   text-align: left;
   min-width: 120px;
   width: auto;
   white-space: nowrap;
}
.manage-edit-btn, .manage-del-btn {
   display: block;
   float: left;
   background-color: transparent;
   border: 0px;
   font-size: 14px;
   line-height: 1.5;
   width: 30px;
   height: 30px;
   padding: 5px;
}
.manage-edit-btn:hover, .manage-edit-btn:focus,
.manage-del-btn:hover, .manage-del-btn:focus {
   color: #453776 !important;
   cursor: pointer;
}
.manage-edit-btn {
   color: #2A68DB;
}
.manage-del-btn {
   color: #c9302c;
}
tr.sub-table-heading td {
   background-color: #EAF6FE; /* hex = 10% of #2A68DB */
   color: #2A68DB;
   font-weight: bold;
   border-top: 1px solid #2A68DB;
   border-bottom: 1px solid #2A68DB;
}
.btn-secondary {
   background-color: #fff;
   border: 1px solid #2A68DB;
   color: #2A68DB;
   font-weight: bold;
   border-radius: 8px;
   padding: 4px 16px;
   margin-left: 8px;
   font-family: "Lato", Helvetica, sans-serif;
}
.selection-text {
   margin-left: 45px;
   color: #444;
   font-weight: 400;
}
.btn-secondary:hover {
   background-color: #453776;
   border-color: #453776;
   color: #fff;
   cursor: pointer;
}
.loading-state {
   width: 75%;
   display:block;
   background-color: #fff;
   height: 16px;
   margin: 5px 0px;
   border-radius: 8px;
   animation: pulse-purple 1s infinite ease-in-out;
}
@keyframes pulse-purple {
   0% {
       background-color: rgba(69, 55, 118, 0.1)
   }
   50% {
       background-color: rgba(69, 55, 118, 0.2)
   }
   100% {
       background-color: rgba(69, 55, 118, 0.1)
   }
}
`
