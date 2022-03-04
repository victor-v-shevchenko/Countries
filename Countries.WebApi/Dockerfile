#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /src
COPY ["Countries.WebApi/Countries.WebApi.csproj", "Countries.WebApi/"]
COPY ["Countries.Db/Countries.Db.csproj", "Countries.Db/"]
COPY ["Countries.Services/Countries.Services.csproj", "Countries.Services/"]
COPY ["Countries.Repositories/Countries.Repositories.csproj", "Countries.Repositories/"]
RUN dotnet restore "Countries.WebApi/Countries.WebApi.csproj"
COPY . .
WORKDIR "/src/Countries.WebApi"
RUN dotnet build "Countries.WebApi.csproj" -c Release -o /app/build
RUN chmod +x ./sqlSetup.sh
CMD /bin/bash ./sqlSetup.sh

FROM build AS publish
RUN dotnet publish "Countries.WebApi.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Countries.WebApi.dll"]
