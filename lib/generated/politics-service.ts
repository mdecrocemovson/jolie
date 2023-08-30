import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };

function fetcher<TData, TVariables extends { [key: string]: any }>(client: GraphQLClient, query: string, variables?: TVariables, requestHeaders?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request({
    document: query,
    variables,
    requestHeaders
  });
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Issue = {
  __typename?: 'Issue';
  name?: Maybe<Scalars['String']['output']>;
};

export type Party = {
  __typename?: 'Party';
  name?: Maybe<Scalars['String']['output']>;
};

export type Politician = {
  __typename?: 'Politician';
  description?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  issues?: Maybe<Array<Maybe<Issue>>>;
  lastName?: Maybe<Scalars['String']['output']>;
  party?: Maybe<Party>;
};

export type Query = {
  __typename?: 'Query';
  fetchPolitician?: Maybe<Politician>;
};


export type QueryFetchPoliticianArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type GetPoliticianQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetPoliticianQuery = { __typename?: 'Query', fetchPolitician?: { __typename?: 'Politician', firstName?: string | null, lastName?: string | null, image?: string | null, description?: string | null, party?: { __typename?: 'Party', name?: string | null } | null } | null };


export const GetPoliticianDocument = `
    query GetPolitician($id: String!) {
  fetchPolitician(id: $id) {
    firstName
    lastName
    party {
      name
    }
    image
    description
  }
}
    `;
export const useGetPoliticianQuery = <
      TData = GetPoliticianQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetPoliticianQueryVariables,
      options?: UseQueryOptions<GetPoliticianQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetPoliticianQuery, TError, TData>(
      ['GetPolitician', variables],
      fetcher<GetPoliticianQuery, GetPoliticianQueryVariables>(client, GetPoliticianDocument, variables, headers),
      options
    );
useGetPoliticianQuery.document = GetPoliticianDocument;


useGetPoliticianQuery.getKey = (variables: GetPoliticianQueryVariables) => ['GetPolitician', variables];
;

useGetPoliticianQuery.fetcher = (client: GraphQLClient, variables: GetPoliticianQueryVariables, headers?: RequestInit['headers']) => fetcher<GetPoliticianQuery, GetPoliticianQueryVariables>(client, GetPoliticianDocument, variables, headers);