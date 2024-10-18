"use client";

import React from "react";
import { BaseRecord, useTranslate, useMany } from "@refinedev/core";
import {
    useTable,
    List,
    EditButton,
    ShowButton,
    DateField,
} from "@refinedev/antd";
import { Table, Space } from "antd";

export const PostsList = () => {
    const translate = useTranslate();
    const { tableProps } = useTable({
        syncWithLocation: true,
    });

    const { data: userData, isLoading: userIsLoading } = useMany({
        resource: "users",
        ids: tableProps?.dataSource?.map((item) => item?.user_id) ?? [],
        queryOptions: {
            enabled: !!tableProps?.dataSource,
        },
    });

    return (
        <List>
            <Table {...tableProps} rowKey="id">
                <Table.Column
                    dataIndex={["user_id"]}
                    title={translate("posts.fields.user_id")}
                    render={(value) =>
                        userIsLoading ? (
                            <>Loading...</>
                        ) : (
                            userData?.data?.find((item) => item.id === value)
                                ?.name
                        )
                    }
                />
                <Table.Column
                    dataIndex="text"
                    title={translate("posts.fields.text")}
                />
                <Table.Column
                    dataIndex={["created_at"]}
                    title={translate("posts.fields.created_at")}
                    render={(value: any) => <DateField value={value} />}
                />
                <Table.Column
                    dataIndex="id"
                    title={translate("posts.fields.id")}
                />
                <Table.Column
                    title={translate("table.actions")}
                    dataIndex="actions"
                    render={(_, record: BaseRecord) => (
                        <Space>
                            <EditButton
                                hideText
                                size="small"
                                recordItemId={record.id}
                            />
                            <ShowButton
                                hideText
                                size="small"
                                recordItemId={record.id}
                            />
                        </Space>
                    )}
                />
            </Table>
        </List>
    );
};

