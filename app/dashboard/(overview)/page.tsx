import CardWrapper from "@/app/ui/dashboard/cards";
import LatestInvoices from "../../ui/dashboard/latest-invoices";
import RevenueChart from "../../ui/dashboard/revenue-chart";
import { lusitana } from "../../ui/fonts";
import { fetchCardData } from "../../lib/data";
import { Suspense } from "react";
import { RevenueChartSkeleton, LatestInvoicesSkeleton, CardsSkeleton } from "@/app/ui/skeletons";

export default async function Page() {
    // const {numberOfInvoices, numberOfCustomers, totalPaidInvoices, totalPendingInvoices} = await fetchCardData();
    return (
        <main>
            <h1 className={` ${lusitana.className} mb-4 text-xl md:text-2xl `}>Dashboard</h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

                {/* delete this card component, to avoid popping effect as the card loads in
                <Card title="Collected" value={totalPaidInvoices} type="collected" />
                <Card title="Pending" value={totalPendingInvoices} type="pending" />
                <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
                <Card title="Total Customers" value={numberOfCustomers} type="customers" /> */}

                {/* change with group components */}
                <Suspense fallback={<CardsSkeleton />}>
                    <CardWrapper />
                </Suspense>

            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
                <Suspense fallback={<RevenueChartSkeleton />} >
                <RevenueChart />
                </Suspense>

                <Suspense fallback={<LatestInvoicesSkeleton />}>
                    <LatestInvoices />
                </Suspense>
                {/* <LatestInvoices latestInvoices={latestInvoices} /> */}
            </div>
        </main>
    )
}