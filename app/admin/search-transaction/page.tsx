"use client";

import dynamic from "next/dynamic";
import React, { useCallback, useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

import type { Content, MenuItem, OnChangeStatus } from "vanilla-jsoneditor";

const JSONEditorReact = dynamic(() => import("@/components/JSONEditorReact"), { ssr: false });

interface Transaction {
  TrxNro: string;
  PK_Store: string;
  PK_terminal: string;
  PK_transactionNo: string;
  trxRcp: string;
  status: string;
  trxDocType: string;
  note: string;
  body: string;
}

const initialContent: Transaction = {
  TrxNro: "0000000109000008705",
  PK_Store: "Store001",
  PK_terminal: "Term01",
  PK_transactionNo: "TRX001",
  trxRcp: "RCP001",
  status: "Completed",
  trxDocType: "Invoice",
  note: "Sample transaction",
  body: JSON.stringify({}),
};

const SearchTransaction: React.FC = () => {
  const [transactionNumber, setTransactionNumber] = useState("");
  const [searchResult, setSearchResult] = useState<Transaction | null>(null);
  const [jsonBody, setJsonBody] = useState<Content>({ json: JSON.parse(initialContent.body) });
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [isJsonEditorOpen, setIsJsonEditorOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(true);

  const handler = useCallback(
    (status: OnChangeStatus, content: Content, previousContent: Content) => {
      console.log({ status });
      console.log({ content });
      console.log({ previousContent });
      setJsonBody(content);
      if ("json" in content) {
        setFormData(content.json as Record<string, string>);
      }
    },
    [jsonBody],
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would fetch data from an API here
    // For this example, we'll use mock data
    const mockResult: Transaction = {
      TrxNro: transactionNumber,
      PK_Store: "Store001",
      PK_terminal: "Term01",
      PK_transactionNo: "TRX001",
      trxRcp: "RCP001",
      status: "Completed",
      trxDocType: "Invoice",
      note: "Sample transaction",
      body: JSON.stringify({
        trxType: "SALE",
        trxDocType: "33",
        trxSubDocType: "",
        trxCountry: "CO",
        trxCompany: "IKSO SAS",
        trxNro: "0000000109000008705",
        trxRcp: "F1098026",
        trxChannel: "STORE",
        trxStore: "661",
        trxTerminal: "109",
        trxTimeStamp: "2023-11-16 15:03:15",
        PK_TransactionNo: 10301,
        PK_StoreNo: "661",
        PK_TerminalNo: "109",
        TransactionId: 202311161503153780000,
        ACL_Trx_Header: {
          trxNroRef: "",
          trxDateRef: "",
          trxTypeRef: "",
          trxNetAmount: 2268899,
          trxGrossAmount: 2699990,
          trxPayment: 2699990,
          trxRoundAmount: 0,
          trxTax: 431091,
          trxDev: "",
          trxOV: "",
          trxVolDet: "DET",
          trxCost: 73879,
          trxBookNSR: "",
          trxClubes: "",
          trxOC: "",
          trxORE: "",
          trxCashier: "2019",
          PK_TransactionNo: 10301,
          PK_StoreNo: "661",
          PK_TerminalNo: "109",
        },
        ACL_Trx_Payments: [
          {
            payTrxNro: "0000000109000008705",
            payRcp: "F1098026",
            payTender: "DEBIT CARD",
            paySubTender: "Master",
            payGateway: "REDEBAN",
            payBankCode: 0,
            payBankDesc: "",
            pay4Digits: "8613",
            payAuthCode: "600311",
            payAmount: 2699990,
            payCurrency: "COP",
            payPoints: 0,
            payExchange: 1,
            payAmountExc: 2699990,
            payTimeStamp: "2023-11-16 15:03:15",
            payQuotas: 0,
            payQuotasAmount: 2268900,
            payUniqueNumber: "002741",
            payDeferred: 0,
            payID: "",
            payCheckNro: "",
            payCheckDate: "",
            payCheckAccount: "",
            payCheckScan: false,
            payCouponCode: "",
            payCouponNro: null,
            PK_TransactionNo: 10301,
            PK_StoreNo: "661",
            PK_TerminalNo: "109",
          },
        ],
        ACL_Trx_Sales: [
          {
            saleItemNro: 1,
            saleTrxNro: "0000000109000008705",
            saleRcp: "F1098026",
            saleStore: "661",
            saleTerminal: "109",
            saleChannel: "STORE",
            saleSubChannel: "",
            saleTipoInv: false,
            saleBarCode: "",
            saleItemCode: "10549433",
            saleItemDesc: "SKOGSTA NN MESA COM 235X100 ACACIA SCA",
            saleItemApprove: false,
            saleItemScan: false,
            saleTimeStamp: "2023-11-16 15:03:15",
            saleQty: 1,
            salePrice: 2699990,
            saleNetAmount: 2268899,
            saleGrossAmount: 2699990,
            salePriceNet: 2268899,
            saleMKP: "NO",
            saleItemCodeTime: 0,
            serviceCode: "0811",
            serviceDesc: "Venta de producto",
            locationRegionCode: null,
            locationRegionDesc: "BOGOTÁ D.C.",
            locationLocalCode: null,
            locationLocalDesc: "LOS MÁRTIRES",
            locationAddress: "Avenida Calle 19 # 28-80, Bogotá D.C.",
            PK_TransactionNo: 10301,
            PK_StoreNo: "661",
            PK_TerminalNo: "109",
            PK_LinesNo: 10000,
            ACL_Trx_CostInfo: [
              {
                costUnitAmount: 73879,
                costAmount: 73879,
                PK_TransactionNo: 10301,
                PK_StoreNo: "661",
                PK_TerminalNo: "109",
                PK_LinesNo: 10000,
              },
            ],
            ACL_Trx_ChargesInfo: [
              {
                chargeCode: "",
                chargeAmountNet: 0,
                chargeAmountGross: 0,
                PK_TransactionNo: 10301,
                PK_StoreNo: "661",
                PK_TerminalNo: "109",
                PK_LinesNo: 10000,
              },
            ],
            ACL_Trx_DiscountInfo: [],
            ACL_Trx_TaxInfo: [
              {
                taxType: "AC",
                taxAmount: 431091,
                taxFlag: "0",
                PK_TransactionNo: 10301,
                PK_StoreNo: "661",
                PK_TerminalNo: "109",
                PK_LinesNo: 10000,
              },
            ],
            ACL_Trx_ShippingInfo: null,
          },
        ],
        ACL_Trx_CustomerInfo: {
          customerName: "DIANA MARTINEZ",
          customerIdType: "6",
          customerId: "CC52352310",
          customerType: "RETAIL",
          PK_TransactionNo: 10301,
          PK_StoreNo: "661",
          PK_TerminalNo: "109",
        },
      }),
    };
    setSearchResult(mockResult);
    setJsonBody({ json: JSON.parse(mockResult.body) });
    setFormData(JSON.parse(mockResult.body));
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    setJsonBody({ json: formData });
  }, [formData]);

  const renderForm = () => {
    return (
      <form className="space-y-4">
        {Object.entries(formData).map(([key, value]) => (
          <div key={key} className="flex flex-col">
            <label htmlFor={key} className="mb-1 font-medium">
              {key}
            </label>
            <input
              type="text"
              id={key}
              name={key}
              value={value}
              onChange={handleFormChange}
              className="rounded border border-gray-300 p-2 dark:bg-[#031226]"
            />
          </div>
        ))}
      </form>
    );
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-2xl font-bold">Search a Transaction</h1>

      <form onSubmit={handleSubmit} className="mb-6">
        <div className="flex flex-col items-center sm:flex-row">
          <input
            type="text"
            value={transactionNumber}
            onChange={(e) => setTransactionNumber(e.target.value)}
            placeholder="Enter transaction number"
            className="mb-2 w-full grow rounded border border-gray-300 p-2 sm:mb-0 sm:mr-2 sm:w-auto dark:bg-[#031226]"
            required
          />
          <button type="submit" className="w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 sm:w-auto">
            Search
          </button>
        </div>
      </form>

      {searchResult && (
        <div>
          <h2 className="mb-2 text-xl font-semibold">Search Result:</h2>
          <div className="rounded bg-white p-4 shadow-md dark:bg-blue-ikea">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {Object.entries(searchResult).map(
                ([key, value]) =>
                  key !== "body" && (
                    <div key={key} className="border-b pb-2">
                      <div className="font-semibold">{key}</div>
                      <div>{value}</div>
                    </div>
                  ),
              )}
            </div>
          </div>

          <div className="mt-4">
            <h3
              className="mb-2 flex cursor-pointer items-center text-lg font-semibold"
              onClick={() => setIsFormOpen(!isFormOpen)}
            >
              Edit Transaction Body
              {isFormOpen ? <ChevronUp className="ml-2" /> : <ChevronDown className="ml-2" />}
            </h3>
            {isFormOpen && <div className="rounded bg-white p-4 shadow-md dark:bg-blue-ikea">{renderForm()}</div>}
          </div>

          <div className="mt-4">
            <h3
              className="mb-2 flex cursor-pointer items-center text-lg font-semibold"
              onClick={() => setIsJsonEditorOpen(!isJsonEditorOpen)}
            >
              Transaction Body (JSON)
              {isJsonEditorOpen ? <ChevronUp className="ml-2" /> : <ChevronDown className="ml-2" />}
            </h3>
            {isJsonEditorOpen && (
              <div className="rounded bg-white p-4 shadow-md">
                <JSONEditorReact
                  content={jsonBody}
                  onChange={(content, previousContent, status) => handler(status, content, previousContent)}
                  onRenderMenu={(menu, context): MenuItem[] | undefined => {
                    console.log({ menu, context });
                    return;
                  }}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchTransaction;
